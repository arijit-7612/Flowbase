"use client";

import {
  Bot,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Columns3,
  FileText,
  FolderKanban,
  LayoutDashboard,
  PenTool,
  Plus,
  Search,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Workspace",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, color: "text-coral-600", active: true },
      { label: "Pages / Spaces", icon: FolderKanban, color: "text-teal-600" },
      { label: "Notes", icon: FileText, color: "text-sky-600" },
      { label: "Whiteboard", icon: PenTool, color: "text-amber-600" },
    ],
  },
  {
    label: "Plan",
    items: [
      { label: "Calendar", icon: CalendarDays, color: "text-violet-600" },
      { label: "Task / Kanban", icon: Columns3, color: "text-emerald-600" },
    ],
  },
  {
    label: "AI",
    items: [
      { label: "AI Assistant", icon: Bot, color: "text-fuchsia-600" },
      { label: "AI Template Builder", icon: Sparkles, color: "text-orange-600" },
    ],
  },
  {
    label: "System",
    items: [{ label: "Settings", icon: Settings, color: "text-slate-600" }],
  },
];

const recentSpaces = [
  { name: "Product Launch", meta: "Whiteboard + notes", accent: "bg-coral-500" },
  { name: "Team Wiki", meta: "18 living pages", accent: "bg-teal-500" },
  { name: "Sprint Map", meta: "Kanban board", accent: "bg-violet-500" },
];

const focusTasks = [
  "Shape onboarding canvas",
  "Review launch task board",
  "Draft Q3 operating notes",
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--surface-warm)] text-slate-900">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            "sticky top-0 flex h-screen shrink-0 flex-col border-r border-slate-200/80 bg-white/88 px-3 py-4 shadow-[8px_0_30px_rgba(15,23,42,0.04)] backdrop-blur transition-all duration-300",
            collapsed ? "w-[76px]" : "w-[76px] sm:w-[248px]"
          )}
        >
          <div className="flex items-center gap-3 px-1">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-slate-950 text-white shadow-sm">
              <Sparkles className="size-5 text-coral-300" />
            </div>
            {!collapsed && (
              <div className="hidden min-w-0 sm:block">
                <p className="truncate text-sm font-semibold leading-5">Flowbase</p>
                <p className="truncate text-xs text-slate-500">Work, map, create</p>
              </div>
            )}
            <Button
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className={cn("ml-auto hidden size-8 rounded-lg sm:inline-flex", collapsed && "ml-0")}
              onClick={() => setCollapsed((value) => !value)}
              size="icon"
              variant="ghost"
            >
              {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
            </Button>
          </div>

          <div className={cn("mt-5 flex items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2", collapsed && "justify-center px-0")}>
            <Search className="size-4 shrink-0 text-slate-400" />
            {!collapsed && <span className="ml-2 hidden truncate text-xs text-slate-500 sm:inline">Search workspace</span>}
          </div>

          <nav className="mt-5 flex-1 space-y-5 overflow-y-auto">
            {navGroups.map((group) => (
              <div key={group.label}>
                {!collapsed && (
                  <p className="mb-2 px-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    {group.label}
                  </p>
                )}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        className={cn(
                          "flex h-9 w-full items-center rounded-lg px-2 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
                          collapsed ? "justify-center" : "justify-center sm:justify-start sm:gap-2.5",
                          item.active && "bg-coral-50 text-slate-950 shadow-sm ring-1 ring-coral-100"
                        )}
                        key={item.label}
                        title={collapsed ? item.label : undefined}
                        type="button"
                      >
                        <Icon className={cn("size-4 shrink-0", item.color)} />
                        {!collapsed && <span className="hidden truncate sm:inline">{item.label}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <div
              className={cn(
                "flex items-center rounded-lg bg-slate-950 p-2 text-white",
                collapsed ? "justify-center" : "justify-center sm:justify-start sm:gap-3"
              )}
            >
              <div className="grid size-8 shrink-0 place-items-center rounded-md bg-teal-400 text-slate-950">
                <Users className="size-4" />
              </div>
              {!collapsed && (
                <div className="hidden min-w-0 sm:block">
                  <p className="truncate text-xs font-semibold">Flowbase Studio</p>
                  <p className="truncate text-[0.7rem] text-slate-300">5 members active</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 bg-[var(--surface-warm)] px-5 py-4 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-teal-700">Dashboard</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950">Good morning, Arijit</h1>
            </div>
            <Button className="gap-2 rounded-lg bg-slate-950 text-white hover:bg-slate-800">
              <Plus className="size-4 text-coral-300" />
              New space
            </Button>
          </header>

          <div className="grid gap-5 p-5 lg:grid-cols-[1.4fr_0.8fr] lg:p-8">
            <section className="space-y-5">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Today&apos;s flow</p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-950">Plan, think, and ship from one calm desk.</h2>
                  </div>
                  <div className="rounded-lg bg-teal-50 px-3 py-2 text-sm font-medium text-teal-700">7 items due</div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Capture ideas", "Map decisions", "Move tasks"].map((label, index) => (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4" key={label}>
                      <p className="text-2xl font-semibold text-slate-950">{index === 0 ? "24" : index === 1 ? "8" : "13"}</p>
                      <p className="mt-1 text-sm text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-slate-950">Recent spaces</h2>
                    <FolderKanban className="size-4 text-teal-600" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {recentSpaces.map((space) => (
                      <button
                        className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-slate-300 hover:bg-slate-50"
                        key={space.name}
                        type="button"
                      >
                        <span className={cn("size-2.5 rounded-full", space.accent)} />
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-slate-900">{space.name}</span>
                          <span className="block truncate text-xs text-slate-500">{space.meta}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-slate-950">Today&apos;s focus</h2>
                    <Columns3 className="size-4 text-emerald-600" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {focusTasks.map((task, index) => (
                      <label className="flex items-center gap-3 rounded-lg bg-slate-50 p-3" key={task}>
                        <input
                          className="size-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                          defaultChecked={index === 0}
                          type="checkbox"
                        />
                        <span className="min-w-0 truncate text-sm text-slate-700">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-5">
              <div className="rounded-lg border border-coral-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Bot className="size-5 text-fuchsia-600" />
                  <h2 className="text-base font-semibold text-slate-950">AI assistant</h2>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Ask Flowbase to turn loose thoughts into pages, tasks, or a board.
                </p>
                <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">
                  Summarize the launch notes and create a sprint board...
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-slate-950">Whiteboard preview</h2>
                  <PenTool className="size-4 text-amber-600" />
                </div>
                <div className="mt-4 h-52 rounded-lg border border-dashed border-slate-300 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:22px_22px] p-4">
                  <div className="w-36 rounded-lg bg-coral-100 p-3 text-xs font-medium text-coral-800 shadow-sm">Idea cluster</div>
                  <div className="ml-auto mt-8 w-32 rounded-lg bg-teal-100 p-3 text-xs font-medium text-teal-800 shadow-sm">Decision map</div>
                  <div className="mt-6 w-40 rounded-lg bg-violet-100 p-3 text-xs font-medium text-violet-800 shadow-sm">Next actions</div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
