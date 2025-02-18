import { Skeleton } from "@/Components/ui/skeleton";


const HomeSkeleton = () => {
    return (
        <div>
            <Skeleton className="h-32 bg-gray-50 dark:bg-black_coin rounded-lg mb-4 mt-12" />
            <div className="flex gap-6 my-8">
                {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-52 w-1/4 bg-gray-50 dark:bg-black_coin rounded-3xl mb-4" />
                ))}
            </div>
            <div className="flex gap-6">
                <Skeleton className="h-80 w-1/4 bg-gray-50 dark:bg-black_coin rounded-3xl mb-4" />
                <Skeleton className="h-80 w-3/4 bg-gray-50 dark:bg-black_coin rounded-3xl mb-4" />
            </div>
        </div>
    );
};

export default HomeSkeleton; 