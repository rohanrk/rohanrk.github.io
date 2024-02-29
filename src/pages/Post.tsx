import * as React from "react";
import MarkdownView from 'react-showdown';
import { useLoaderData } from "react-router-dom";

import "../style/post.css"

const Post: React.FC<{}> = () => {
    const content = useLoaderData() as string
    return (
        <div className="content">
            <MarkdownView markdown={content} />
        </div>
    )
}

export default Post;