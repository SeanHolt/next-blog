import Router from "next/router";
import React from "react";
import ReactMarkdown from 'react-markdown'
import { type Post as PostType } from "@/lib/types"

const Post: React.FC<{post: PostType}> = ({post}) => {
    const authorName = post.author && post.author.name ? post.author.name : "Unknown author"
    return (
        <div className="post" onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
            <h2>{post.title}</h2>
            <small>By {authorName}</small>
            <ReactMarkdown children={post.content}></ReactMarkdown>
            <style jsx>{`
                .post {
                    background: white;
                    transition: box-shadow 0.1s east-in;
                    box-shadow: 1px 1px 3px #aaa;
                }
                .post:hover {
                    box-shadow: 2px 2px 3px #aaa;
                }
                .post + .post {
                    margin-top: 2rem;
                }

                div {
                    color: inherit;
                    padding: 2rem;
                }
            `}
            </style>
        </div>
    )
}
export default Post;