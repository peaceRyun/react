import { PostList } from '../../components';
import PostForm from '../../components/posts/PostForm';
import { PostsCon } from './style';

const Post = () => {
    return (
        <PostsCon>
            <div className='inner'>
                <h2>일정관리</h2>
                <PostForm />
                <PostList />
            </div>
        </PostsCon>
    );
};

export default Post;
