import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { FailedPost } from "../../../components/Article/FailedPost";
import { Article, initialValue } from "../../../types";
import ArticleEditor from "../../../components/Editor/ArticleEditor";
import Alert from "../../../components/Alert";
import Tag from "../../../components/Tag";
import TagSelector from "../../../components/TagSelector";

const NewArticle: NextPage = () => {
    const [authenticated, setAuthenticated] = useState<boolean>();
    useEffect(() => {
        getUser()
            .then((res) => {
                if (res.status !== 401) setAuthenticated(true);
            })
            .catch((e) => console.log(e));
    }, []);
    const getUser = async () => fetch("/api/user/@me");

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [failed, setFailed] = useState<boolean>(false);
    const [failedMessage, setFailedMessage] = useState<string>("");
    const [, setSubmitted] = useState(false);
    const [madeChanges, setMadeChanges] = useState(false);
    const [success, setSuccess] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchResults, setSearchResults] = useState<[]>([]);

    const handleChange = (value: string) => {
        if (value) {
            fetch(`/api/search/${value}`)
                .then((res) => res.json())
                .then((res) => setSearchResults(res.slice(0, 4)))
                .catch((err) => console.log(err));
        } else return;
    };

    const SearchResults = () => {
        if (!searchResults) return null;
        if (searchResults.length === 0) return null;
        else {
            return (
                <div className="mb-5 border p-5 rounded">
                    <h1 className="mb-2">Similar Titles</h1>
                    {searchResults.map(
                        ({
                            id,
                            title,
                            urn_title,
                            featured,
                            last_edited,
                            tags,
                        }: Article) => (
                            <div key={id}>
                                <div className="border-1 flex top-0 rounded-md p-5 mb-3">
                                    <div className="flex relative">
                                        {featured ? (
                                            <Tag title={"Featured"} />
                                        ) : null}
                                        <p className="mr-10">
                                            <Link
                                                href={`/article/view/${urn_title}`}
                                            >
                                                <a>{title}</a>
                                            </Link>
                                        </p>
                                        {tags.map((t) => (
                                            <button
                                                onClick={() =>
                                                    setSelectedTags([
                                                        ...selectedTags,
                                                        t,
                                                    ])
                                                }
                                                className="mr-3 text-xs"
                                            >
                                                <Tag title={t} />
                                            </button>
                                        ))}
                                        <p className="absolute text-sm right-0">
                                            {new Date(
                                                last_edited
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            );
        }
    };
    const submitPost = () => {
        if (selectedTags.length < 1 || selectedTags.length > 4) {
            setFailedMessage("You must select between 1 and 3 tags!");
            setFailed(true);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return null;
        } else if (title.length < 5) {
            setFailedMessage(
                "You must have a title with a length of 5 or greater!"
            );
            setFailed(true);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return null;
        } else if (description.length < 10) {
            setFailedMessage(
                "You must have a description with a length of 10 or greater!"
            );
            setFailed(true);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return null;
        } else if (!window.localStorage.getItem("content")) {
            setFailedMessage(
                "It looks like the content of the article has not been stored in the browser, please save your work and refresh and try again."
            );
            setFailed(true);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return null;
        }

        const body = JSON.stringify({
            title: title,
            description: description,
            tags: selectedTags,
            body: JSON.parse(window.localStorage.getItem("content") || "{}"),
        });

        fetch("/api/new-article", {
            method: "POST",
            body: body,
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        })
            .then(async (response) => {
                if (response.ok) {
                    setSubmitted(true);
                    setSuccess(true);
                } else {
                    const message = await response.text();
                    console.log(message);
                    setFailedMessage(message);
                    setFailed(true);
                }
            })
            .catch(() => {
                setFailed(true);
            });
    };

    const SubmitButton = () => {
        if (madeChanges) {
            return (
                <button className="mt-10" onClick={submitPost}>
                    Create Post
                </button>
            );
        } else return null;
    };

    const addTag = (tag: string) => setSelectedTags([...selectedTags, tag]);
    const removeTag = (tag: string) =>
        setSelectedTags(selectedTags.filter((item) => item !== tag));

    if (!authenticated) {
        return (
            <Alert
                type="error"
                message="You must be logged in to create an article"
            />
        );
    }
    if (success) {
        return (
            <Alert
                type="success"
                message="Article Submitted!"
                description="Thank you for your submission! Your article will be held until a moderator approves it. Until then check out"
            />
        );
    } else {
        return (
            <div>
                <FailedPost message={failedMessage} failed={failed}/>
                <SearchResults />
                <input
                    id={"title"}
                    name={"title"}
                    type={"text"}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        setMadeChanges(true);
                        handleChange(event.target.value);
                    }}
                    placeholder="Title"
                    required
                    autoFocus={true}
                    autoComplete={"off"}
                    maxLength={50}
                    className="appearance-none border-2 border-gray-100 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                />

                <input
                    id={"description"}
                    name="description"
                    type={"text"}
                    onChange={(event) => {
                        setDescription(event.target.value);
                        setMadeChanges(true);
                    }}
                    placeholder="Description"
                    required
                    maxLength={200}
                    className="appearance-none border-2 border-gray-100 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                />

                <TagSelector
                    selectedTags={selectedTags}
                    addTag={addTag}
                    removeTag={removeTag}
                />

                <ArticleEditor
                    initValue={initialValue}
                    readonly={false}
                    placeholder={"Start writing ..."}
                />
                <SubmitButton />
            </div>
        );
    }
};

export default NewArticle;