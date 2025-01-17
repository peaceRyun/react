import styled from 'styled-components';
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPost } from '../../store/modules/postSlice';

const PostUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
    }
`;

const PostList = () => {
    const { post } = useSelector((state) => state.postR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);
    return (
        <PostUl>
            {post.map((post) => (
                <PostItem key={post.objectID} post={post} />
            ))}
        </PostUl>
    );
};

export default PostList;
