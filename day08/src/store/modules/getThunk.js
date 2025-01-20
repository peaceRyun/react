import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const response = await axios.get(url);
    return response.data;
});

export const getUser = createAsyncThunk('users/getUser', async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await axios.get(url);
    return response.data;
});

export const getPost = createAsyncThunk('posts/getPost', async (text) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${text}`;
    const response = await axios.get(url);
    return response.data.hits;
});
