import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface Props {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: "Visit Us",
    subTitle: "Cairo, Egypt",
    icon: (
      <MapPin className="text-gray-600 group-hover:text-[#151515] transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subTitle: "+20 1019640616",
    icon: (
      <Phone className="text-gray-600 group-hover:text-[#151515] transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subTitle: "Sat - Thu 9:00 AM- 5:00 PM",
    icon: (
      <Clock className="text-gray-600 group-hover:text-[#151515] transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subTitle: "moabdelmajeed01@gmail.com",
    icon: (
      <Mail className="text-gray-600 group-hover:text-[#151515] transition-colors" />
    ),
  },
];

function FooterTop() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-8 border-b">
      {data?.map((item, i) => {
        return (
          <ContactItem
            key={i}
            title={item?.title}
            icon={item?.icon}
            subTitle={item?.subTitle}
          />
        );
      })}
    </div>
  );
}
const ContactItem = ({ icon, title, subTitle }: Props) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-[#151515] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors hovereffect">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
export default FooterTop;
