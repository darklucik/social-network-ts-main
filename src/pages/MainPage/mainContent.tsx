import { WhatsNew } from "../../components/whatsNew/whatsNew";
import { History } from "../../components/history/history";
import { Post } from "../../components/Post/Post";
import { useGetPostListQuery } from "../../store/Api/postApi";
import { Loader } from "../../components/loader/loader";
import { Error } from "../../components/error/error";

export const MainContent = () => {
  const { data, isSuccess, isLoading, isError } = useGetPostListQuery({});

  return (
    <main className="Main">
      <WhatsNew />
      <History />
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess &&
        !!data.message.length &&
        data.message.map((postItem: any) => (
          <Post key={postItem.id} post={postItem} />
        ))}
    </main>
  );
};
