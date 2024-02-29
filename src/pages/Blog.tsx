import * as React from "react";
import Card from '../component/Card';
import { Post } from '../component/Types';

const { posts } = require( '../posts/posts.json');

const Blog: React.FC<{}> = () => {
    return (
    <div>
        {
            posts.toReversed().map((post: Post) => (
                <Card 
                    key={post.title} 
                    title={post.title} 
                    subtitle={post.subtitle}
                    date={post.date}
                />
            ))
        }
    </div>
    )
}

export default Blog;