import { productType } from "@/constants";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

function HomeTabbar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex items-center justify-between gap-1.5 font-semibold text-sm">
      <div className="flex items-center gap-1.5">
        {productType?.map((prod) => {
          return (
            <button
              onClick={() => onTabSelect(prod?.title)}
              className={`border border-[#151515] px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-[#151515] hover:text-white hovereffect ${selectedTab === prod?.title && "bg-[#151515] text-white"}`}
              key={prod?.title}
            >
              {prod?.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HomeTabbar;
