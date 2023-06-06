import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreDispatch, RootState } from "../../../store/Store";
import { fetchJoke } from "../../../slices/ChuckSlice";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const ChuckNorrisJoke = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const joke = useSelector((state: RootState) => state.joke.value);
  const jokeStatus = useSelector((state: RootState) => state.joke.status);

  const getJoke = () => {
    dispatch(fetchJoke());
  };

  return (
    <div>
      <h5>Wanna hear a joke?</h5>
      {jokeStatus == "loading" ? (
        <CircularProgress color="inherit" />
      ) : jokeStatus == "failed" ? (
        <h6>An error was</h6>
      ) : (
        <p>{joke}</p>
      )}

      <Button variant="contained" onClick={getJoke.bind(this, null)}>
        Get a fresh Joke
      </Button>
    </div>
  );
};

export default ChuckNorrisJoke;
