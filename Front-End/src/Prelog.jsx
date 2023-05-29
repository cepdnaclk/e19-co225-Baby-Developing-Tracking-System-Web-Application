import PostService from "./services/post.service";

export const Prelog = () => {
  useEffect(() => {
    PostService.getAllPrivatePosts().then(
      (res) => {
        setPrivatePosts(res.data);
        console.log("response", res);
      },
      (err) => {
        console.log("private page", err.res);
      }
    );
  });

  return <p>{privatePosts.map((post) => post)}</p>;
};
