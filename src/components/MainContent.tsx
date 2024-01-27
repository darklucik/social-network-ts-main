import { WhatsNew } from "./WhatsNew";
import { History } from "./History";
import { Post } from "./Post/Post";
import { useGetPostListQuery } from "../store/Api/postApi";
import { Loader } from "./UI/Loader/Loader";
import { Error } from "./UI/Error/Error";

export const MainContent = () => {
  const { data, isSuccess, isError, isLoading } = useGetPostListQuery({});

  console.log("data", data);

  return (
    <main className="Main">
      <WhatsNew />
      <History />
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess &&
        !!data.message.length &&
        data.message.map((PostItem: any) => (
          <Post key={PostItem.id} post={PostItem} />
        ))}
    </main>
  );
};
