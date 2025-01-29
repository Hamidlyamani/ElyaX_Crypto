import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { SidebarTrigger } from "@/Components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";


export default function Watchlist() {
  return (<>
    <header className="flex items-center h-16 gap-2 px-4 border-b shrink-0">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-4 mr-2" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
              Building Your Application
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="grid gap-4 auto-rows-min md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  </>
  )
}

