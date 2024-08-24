import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseRecommendedData from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtube/App/recommendedVideos",
  async (videoId, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResult=20&type=videoId=${videoId}`);
    const items = response.data.items;
    const parsedData = await parseRecommendedData(items, videoId);

    return {parsedData};
  }
);
