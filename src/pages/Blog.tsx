import * as React from "react";
import { NavLink } from "react-router-dom";
import Card from '../component/Card';
import { Post } from '../util/types';

const { posts } = require( '../posts/posts.json');

const Blog: React.FC<{}> = () => {
    return (
    <div>
        {
            posts.map((post: Post) => (
                <Card 
                    key={post.title}
                    title={<NavLink to={post.path}>
                            <p>{post.title}</p>
                        </NavLink>}
                    subtitle={post.subtitle}
                    date={post.date}
                />
            ))
        }
    </div>
    )
}

export default Blog;