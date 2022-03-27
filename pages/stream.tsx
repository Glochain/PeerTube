import React from "react";

import { APP_STATES } from "../utils/types";
import AppBody from "../components/AppBody";
import { createStream, getStreamStatus } from "../utils/apiFactory";

const INITIAL_STATE = {
  appState: APP_STATES.API_KEY,
  apiKey: null,
  streamId: null,
  playbackId: null,
  streamKey: null,
  streamIsActive: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_API_KEY":
      return {
        ...state,
        appState: APP_STATES.CREATE_BUTTON,
        apiKey: action.payload.apiKey,
      };
    case "CREATE_CLICKED":
      return {
        ...state,
        appState: APP_STATES.CREATING_STREAM,
      };
    case "STREAM_CREATED":
      return {
        ...state,
        appState: APP_STATES.WAITING_FOR_VIDEO,
        streamId: action.payload.streamId,
        playbackId: action.payload.playbackId,
        streamKey: action.payload.streamKey,
      };
    case "VIDEO_STARTED":
      return {
        ...state,
        appState: APP_STATES.SHOW_VIDEO,
        streamIsActive: true,
      };
    case "VIDEO_STOPPED":
      return {
        ...state,
        appState: APP_STATES.WAITING_FOR_VIDEO,
        streamIsActive: false,
      };
    case "RESET_DEMO_CLICKED":
      return {
        ...INITIAL_STATE,
      };
    case "INVALID_API_KEY":
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  React.useEffect(() => {
    if (state.appState === APP_STATES.CREATING_STREAM) {
      (async function () {
        try {
          const streamCreateResponse = await createStream(state.apiKey);
          if (streamCreateResponse.data) {
            const {
              id: streamId,
              playbackId,
              streamKey,
            } = streamCreateResponse.data;
            dispatch({
              type: "STREAM_CREATED",
              payload: {
                streamId,
                playbackId,
                streamKey,
              },
            });
          }
        } catch (error) {
          if (error.response.status === 403) {
            dispatch({
              type: "INVALID_API_KEY",
              payload: {
                message:
                  "Invalid API Key. Please try again with right API key!",
              },
            });
          } else {
            dispatch({
              type: "INVALID_API_KEY",
              payload: {
                message:
                  "Something went wrong! Please try again after sometime",
              },
            });
          }
        }
      })();
    }

    let interval;
    if (state.streamId) {
      interval = setInterval(async () => {
        const streamStatusResponse = await getStreamStatus(
          state.apiKey,
          state.streamId
        );
        if (streamStatusResponse.data) {
          const { isActive } = streamStatusResponse.data;
          dispatch({
            type: isActive ? "VIDEO_STARTED" : "VIDEO_STOPPED",
          });
        }
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [state.appState]);

  return (
    <main className="container pb-12 h-screen m-auto pt-12 lg:pt-12">

      <AppBody
        state={state}
        setApiKey={(apiKey) =>
          dispatch({ type: "SUBMIT_API_KEY", payload: { apiKey } })
        }
        createStream={() => dispatch({ type: "CREATE_CLICKED" })}
      />
      <footer className="font-extrabold fixed bottom-0 hover:bg-sky-700 left-0 w-full h-20 flex items-center justify-center">
        Made with the&nbsp;
        <a href="https://livepeer.com/docs/" className="text-livepeer text-xl">
          Livepeer.com
        </a>
        &nbsp;API &nbsp; &nbsp; &nbsp;
         
        <button
          className="text-yellow-500 font-extrabold border p-2 h-3/4 rounded border-livepeer hover:bg-gray-300 hover:text-black"
          onClick={() => dispatch({ type: "RESET_DEMO_CLICKED" })}
        >
          Reset Live Stream
        </button>
      </footer>
      {state.error && (
        <div className="bg-black bg-opacity-60 flex items-center justify-center fixed top-0 left-0 h-screen w-screen">
          <div className="flex flex-col w-1/3 h-56 bg-white p-12 items-center text-center text-lg rounded">
            {state.error}
            <button
              className="border p-2 w-1/3 rounded border-livepeer hover:bg-livepeer hover:text-white mt-4"
              onClick={() => dispatch({ type: "RESET_DEMO_CLICKED" })}
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
