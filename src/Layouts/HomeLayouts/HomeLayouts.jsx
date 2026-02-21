import { BiChevronDown } from "react-icons/bi";
import { BsLayoutSidebarInset, BsGlobe2 } from "react-icons/bs";
import {
  IoMdHome,
  IoMdTrendingUp,
  IoMdBookmark,
  IoMdNotifications,
  IoMdSettings,
  IoMdPeople,
  IoMdSearch,
  IoMdStar,
  IoMdTime,
  IoMdEye,
} from "react-icons/io";
import { MdOutlineCategory, MdAnalytics, MdLogout } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

const mainNavItems = [
  {
    icon: <IoMdHome size={18} />,
    label: "Homepage",
    tip: "Homepage",
    link: "/",
  },
  {
    icon: <IoMdTrendingUp size={18} />,
    label: "Trending",
    tip: "Trending",
    badge: "NEW",
    badgeColor: "badge-error",
    link: "/trending",
  },

  {
    icon: <IoMdBookmark size={18} />,
    label: "Bookmarks",
    tip: "Bookmarks",
    badge: "12",
    badgeColor: "badge-primary",
    link: "/bookmark",
  },
  {
    icon: <IoMdPeople size={18} />,
    label: "Authors",
    tip: "Authors",
    link: "/author",
  },
  {
    icon: <MdAnalytics size={18} />,
    label: "Analytics",
    tip: "Analytics",
    link: "/analytics",
  },
];

//   "#AI",
//   "#ClimateChange",
//   "#Bitcoin",
//   "#NASA",
//   "#Election2026",
//   "#Health",
//   "#Technology",
//   "#Finance",
// ];

// ── Demo Page Content (replaces <Outlet /> for preview) ───
// function DemoContent() {
//   return (
//     <div className="p-4 md:p-6 space-y-6 min-h-screen bg-base-100">
//       {/* Top Bar */}
//       <div className="flex items-center gap-3 flex-wrap">
//         <label className="input input-bordered flex items-center gap-2 flex-1 min-w-[200px] max-w-sm">
//           <IoMdSearch size={16} className="text-base-content/40" />
//           <input
//             type="text"
//             className="grow text-sm"
//             placeholder="Search articles..."
//           />
//         </label>
//         <div className="ml-auto flex items-center gap-3">
//           <button className="btn btn-ghost btn-sm btn-circle relative">
//             <IoMdNotifications size={20} />
//             <span className="badge badge-xs badge-error absolute -top-0.5 -right-0.5">
//               3
//             </span>
//           </button>
//           <div className="avatar">
//             <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//               <img src="https://i.pravatar.cc/40?img=12" alt="user" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Welcome */}
//       <div>
//         <h1 className="text-2xl font-bold">Good morning, Editor 👋</h1>
//         <p className="text-base-content/50 text-sm mt-1">
//           Here's what's happening in the world today — Saturday, Feb 21, 2026.
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//         {stats.map((s, i) => (
//           <div
//             key={i}
//             className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="card-body p-4 flex-row items-center gap-3">
//               <div className={`p-2.5 rounded-xl ${s.bg} ${s.color}`}>
//                 {s.icon}
//               </div>
//               <div>
//                 <p className="text-xs text-base-content/50 leading-none mb-1">
//                   {s.label}
//                 </p>
//                 <p className="text-xl font-bold leading-none">{s.value}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Featured + List */}
//       <div className="grid lg:grid-cols-5 gap-4">
//         {/* Featured Card */}
//         <div className="lg:col-span-3 card bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-md">
//           <div className="card-body p-6 gap-3">
//             <div className="flex items-center gap-2">
//               <span className="badge badge-warning font-bold text-xs">
//                 ⚡ FEATURED
//               </span>
//               <span className="badge badge-sm badge-outline border-primary-content/40 text-primary-content/70">
//                 {featuredNews.category}
//               </span>
//             </div>
//             <h2 className="text-xl font-bold leading-snug">
//               {featuredNews.title}
//             </h2>
//             <p className="text-primary-content/70 text-sm leading-relaxed">
//               {featuredNews.summary}
//             </p>
//             <div className="flex items-center justify-between mt-1">
//               <div className="flex items-center gap-2 text-sm text-primary-content/70">
//                 <div className="avatar">
//                   <div className="w-7 rounded-full">
//                     <img src={featuredNews.avatar} alt={featuredNews.author} />
//                   </div>
//                 </div>
//                 <span>{featuredNews.author}</span>
//               </div>
//               <div className="flex items-center gap-3 text-xs text-primary-content/60">
//                 <span className="flex items-center gap-1">
//                   <IoMdTime size={12} /> {featuredNews.time}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <IoMdEye size={12} /> {featuredNews.views}
//                 </span>
//               </div>
//             </div>
//             <button className="btn btn-sm bg-white/20 hover:bg-white/30 border-none text-primary-content w-fit mt-1">
//               Read Full Article →
//             </button>
//           </div>
//         </div>

//         {/* Latest News List */}
//         <div className="lg:col-span-2 card bg-base-100 border border-base-200 shadow-sm">
//           <div className="card-body p-4 gap-0">
//             <h3 className="font-bold text-sm flex items-center gap-2 mb-3">
//               <IoMdTrendingUp className="text-primary" size={16} />
//               Latest News
//             </h3>
//             <div className="divide-y divide-base-200">
//               {newsList.map((n) => (
//                 <div
//                   key={n.id}
//                   className="py-3 space-y-1 cursor-pointer hover:pl-1 transition-all rounded group"
//                 >
//                   <div className="flex items-center gap-1.5 flex-wrap">
//                     <span className={`badge badge-xs ${n.categoryColor}`}>
//                       {n.category}
//                     </span>
//                     {n.hot && (
//                       <span className="badge badge-xs badge-error">🔥 Hot</span>
//                     )}
//                   </div>
//                   <p className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
//                     {n.title}
//                   </p>
//                   <div className="flex items-center gap-3 text-xs text-base-content/40">
//                     <span className="flex items-center gap-1">
//                       <IoMdTime size={11} />
//                       {n.time}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <IoMdEye size={11} />
//                       {n.views}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="btn btn-outline btn-primary btn-sm w-full mt-3">
//               View All News
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Trending Tags */}
//       <div className="card bg-base-100 border border-base-200 shadow-sm">
//         <div className="card-body p-4">
//           <h3 className="font-bold text-sm flex items-center gap-2 mb-3">
//             <IoMdStar className="text-warning" size={16} />
//             Trending Topics
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {trendingTags.map((tag) => (
//               <span
//                 key={tag}
//                 className="badge badge-outline hover:badge-primary cursor-pointer transition-all text-xs"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ── Main Layout ────────────────────────────────────────────
export default function Dashboard() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ── Drawer Content (main page) ── */}
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-center items-center sticky top-0 z-30 shadow-sm border-b border-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <BsLayoutSidebarInset size={20} />
          </label>

          {/* Logo visible on mobile */}
          <div className="flex items-center gap-2 w-full px-2 lg:hidden">
            <div className="bg-primary text-primary-content p-2 rounded-lg font-bold text-sm">
              NF
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              NewsFlow
            </span>
          </div>
        </nav>

        {/* Page Content */}
        {/* Replace <DemoContent /> with <Outlet /> in real app */}
        <Outlet />
      </div>

      {/* ── Sidebar ── */}
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col bg-base-200 w-64 border-r border-base-300">
          {/* Sidebar Logo */}
          <div className="flex items-center gap-3 px-4 py-[14px] border-b border-base-300">
            <div className="bg-primary text-primary-content px-2 py-1.5 rounded-lg font-bold text-sm">
              NF
            </div>
            <div>
              <p className="font-bold text-base text-primary leading-none">
                NewsFlow
              </p>
              <p className="text-xs text-base-content/40 mt-0.5">
                Editorial Dashboard
              </p>
            </div>
          </div>

          {/* Main Nav */}
          <ul className="menu w-full grow px-2 pt-3 pb-0 gap-0.5">
            <li className="menu-title px-3 py-1 text-xs tracking-widest opacity-40">
              MAIN MENU
            </li>

            {mainNavItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.link || "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-primary text-primary-content shadow-lg shadow-primary/30"
                        : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                    }`
                  }
                  data-tip={item.tip}
                >
                  {item.icon}
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`badge badge-xs ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}

            {/* Categories Section */}
            {/* <div className="divider my-1 opacity-20" />
            <li className="menu-title px-3 py-1 text-xs tracking-widest opacity-40">
              
            </li> */}
          </ul>

          {/* Bottom: Settings + Logout + User */}
          <div className="border-t border-base-300 px-2 pt-2 pb-3 space-y-0.5">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm">
              <IoMdSettings size={18} />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm text-error">
              <MdLogout size={18} />
              <span>Logout</span>
            </button>

            {/* User Card */}
            <div className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl bg-base-300">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-200 ring-offset-1">
                  <img
                    src="https://i.ibb.co.com/rfsbtFGg/IMG-20220810-162239-857.jpg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate leading-none">
                  Abdullah Shamim
                </p>
                <p className="text-xs text-base-content/40 truncate mt-0.5">
                  abdullahshamim884@gmail.com
                </p>
              </div>
              <span className="badge badge-xs badge-success shrink-0">Pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
