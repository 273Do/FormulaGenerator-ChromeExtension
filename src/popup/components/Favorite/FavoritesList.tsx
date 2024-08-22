import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { FavoriteItemObj } from "@/utils/storage";
import FavoriteItem from "./FavoriteItem";
import EditFavorite from "./EditFavorite";

const FavoritesList = ({ data }: { data: FavoriteItemObj[] }) => {
  return (
    <>
      {data.map((item: FavoriteItemObj) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <div>
              <FavoriteItem data={item} />
            </div>
          </DialogTrigger>
          <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 supports-[backdrop-filter]:bg-background/100">
            <EditFavorite item={item} />
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};

export default FavoritesList;
