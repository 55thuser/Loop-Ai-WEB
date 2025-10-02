"use client"
import { useState } from "react"
import { X, Users, Briefcase, FolderOpen, ChevronRight, Building2, MapPin, Globe, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button.jsx"
import { Dialog, DialogContent } from "@/components/ui/dialog.jsx"
import { Badge } from "@/components/ui/badge.jsx"

export function MyBookmarksModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("founders")

  // Sample data for bookmarked founders
  const founderProfiles = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Technical Co-founder",
      expertise: ["AI/ML", "Python", "Cloud Architecture"],
      location: "San Francisco, CA",
      experience: "10+ years",
      avatar: "SC",
      isVerified: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Business Co-founder",
      expertise: ["Sales", "Marketing", "Growth"],
      location: "New York, NY",
      experience: "8 years",
      avatar: "MR",
      isVerified: true,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Product Co-founder",
      expertise: ["Product Design", "UX/UI", "Strategy"],
      location: "Austin, TX",
      experience: "6 years",
      avatar: "EJ",
      isVerified: false,
      rating: 4.9,
    },
  ]

  // Sample data for bookmarked investors
  const investorProfiles = [
    {
      id: 1,
      name: "David Park",
      firm: "Venture Capital Partners",
      focusAreas: ["SaaS", "Fintech", "AI"],
      investmentRange: "$100K - $5M",
      portfolio: "50+ companies",
      location: "Silicon Valley",
      avatar: "DP",
      isActive: true,
    },
    {
      id: 2,
      name: "Lisa Thompson",
      firm: "Angel Investor Network",
      focusAreas: ["Healthcare", "Biotech", "MedTech"],
      investmentRange: "$50K - $500K",
      portfolio: "25+ companies",
      location: "Boston, MA",
      avatar: "LT",
      isActive: true,
    },
    {
      id: 3,
      name: "James Wilson",
      firm: "Growth Equity Fund",
      focusAreas: ["E-commerce", "Marketplace", "Consumer"],
      investmentRange: "$1M - $20M",
      portfolio: "100+ companies",
      location: "London, UK",
      avatar: "JW",
      isActive: false,
    },
  ]

  // Sample data for saved projects
  const savedProjects = [
    {
      id: 1,
      name: "EcoTrack",
      tagline: "Carbon footprint tracking for businesses",
      stage: "Seed",
      industry: "Climate Tech",
      teamSize: "5-10",
      fundingGoal: "$500K",
      progress: 65,
      logo: "ET",
    },
    {
      id: 2,
      name: "HealthBridge",
      tagline: "Connecting patients with specialists globally",
      stage: "Series A",
      industry: "Healthcare",
      teamSize: "10-20",
      fundingGoal: "$2M",
      progress: 40,
      logo: "HB",
    },
    {
      id: 3,
      name: "LearnFlow",
      tagline: "AI-powered personalized learning platform",
      stage: "Pre-seed",
      industry: "EdTech",
      teamSize: "2-5",
      fundingGoal: "$250K",
      progress: 80,
      logo: "LF",
    },
  ]

  const tabs = [
    { id: "founders", label: "Founder Profiles", icon: Users, count: founderProfiles.length },
    { id: "investors", label: "Investor Profiles", icon: Briefcase, count: investorProfiles.length },
    { id: "projects", label: "Saved Projects", icon: FolderOpen, count: savedProjects.length },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl p-0 max-h-[85vh] flex flex-col"
        hideClose
      >
        {/* Header */}
        <div className="relative p-3 sm:p-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">My Bookmarks</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 sm:h-7 sm:w-7 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-blue-500 text-white shadow-md transform scale-105"
                      : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {/* Founder Profiles Tab */}
          {activeTab === "founders" && (
            <div className="space-y-3 sm:space-y-4 animate-fadeIn">
              {founderProfiles.map((founder, index) => (
                <div
                  key={founder.id}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  style={{
                    animation: `slideInFromLeft 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {founder.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                              {founder.name}
                            </h3>
                            {founder.isVerified && (
                              <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs px-1.5 py-0">
                                Verified
                              </Badge>
                            )}
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs text-gray-600 dark:text-gray-400">{founder.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">{founder.role}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {founder.location}
                            </span>
                            <span>{founder.experience}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {founder.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Investor Profiles Tab */}
          {activeTab === "investors" && (
            <div className="space-y-3 sm:space-y-4 animate-fadeIn">
              {investorProfiles.map((investor, index) => (
                <div
                  key={investor.id}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-green-200 dark:hover:border-green-800"
                  style={{
                    animation: `slideInFromRight 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {investor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                              {investor.name}
                            </h3>
                            {investor.isActive && (
                              <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs px-1.5 py-0">
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {investor.firm}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-500">
                            <span className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {investor.location}
                            </span>
                            <span>{investor.portfolio}</span>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              Investment: <span className="font-medium">{investor.investmentRange}</span>
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {investor.focusAreas.map((area) => (
                                <span
                                  key={area}
                                  className="px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-xs"
                                >
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Saved Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-3 sm:space-y-4 animate-fadeIn">
              {savedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                  style={{
                    animation: `slideInFromBottom 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {project.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                              {project.name}
                            </h3>
                            <Badge
                              variant="outline"
                              className="text-xs px-1.5 py-0 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300"
                            >
                              {project.stage}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">{project.tagline}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-500">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              {project.industry}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {project.teamSize}
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {project.fundingGoal}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-600 dark:text-gray-400">Funding Progress</span>
                              <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                                {project.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-500"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {((activeTab === "founders" && founderProfiles.length === 0) ||
            (activeTab === "investors" && investorProfiles.length === 0) ||
            (activeTab === "projects" && savedProjects.length === 0)) && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                <FolderOpen className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">No bookmarks yet</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start bookmarking {activeTab === "founders" ? "founders" : activeTab === "investors" ? "investors" : "projects"} to see them here
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-zinc-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Total bookmarks: <span className="font-semibold">{founderProfiles.length + investorProfiles.length + savedProjects.length}</span>
            </p>
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm px-3 py-1 h-7 sm:h-8"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Dialog>
  )
}