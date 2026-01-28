import { PageLayout } from "@/layouts";
import { Header } from "@/components";
import { Cpu, Mic, Keyboard, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const QuickLink = ({ to, icon: Icon, title, description }: { to: string; icon: any; title: string; description: string }) => (
  <Link
    to={to}
    className="flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
  >
    <div className="p-2 rounded-lg bg-primary/10">
      <Icon className="size-5 text-primary" />
    </div>
    <div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </Link>
);

const Dashboard = () => {
  return (
    <PageLayout
      title="Dashboard"
      description="Welcome to thot - your fully free AI assistant"
    >
      <div className="space-y-6">
        <Header
          title="Quick Setup"
          description="Get started by configuring your AI providers and preferences"
          isMainTitle
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickLink
            to="/settings"
            icon={Cpu}
            title="AI Providers"
            description="Configure OpenAI, Anthropic, or custom providers"
          />
          <QuickLink
            to="/settings"
            icon={Mic}
            title="Speech-to-Text"
            description="Set up voice input with your preferred STT provider"
          />
          <QuickLink
            to="/shortcuts"
            icon={Keyboard}
            title="Keyboard Shortcuts"
            description="Customize global shortcuts for quick access"
          />
          <QuickLink
            to="/responses"
            icon={Globe}
            title="Response Settings"
            description="Choose language, response length, and more"
          />
        </div>

        <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-sm text-green-600 dark:text-green-400">
            🎉 <strong>All features unlocked!</strong> No license required. Configure your own API keys and enjoy!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
