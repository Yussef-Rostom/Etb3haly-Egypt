import { Card } from '@/components/ui/card';
import { Box, Globe, TrendingUp } from 'lucide-react';

const RevenueSlide = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold hero-text text-center">Revenue Streams</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="surface-card p-6 text-center space-y-4 glow-effect">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Box className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Service Fees</h3>
          <p className="text-muted-foreground">Revenue from 3D design consultation and printing services</p>
          <div className="text-2xl font-bold text-primary">40%</div>
        </Card>
        <Card className="surface-card p-6 text-center space-y-4 glow-effect">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
            <Globe className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-xl font-semibold">Product Sales</h3>
          <p className="text-muted-foreground">Direct sales of ready-made 3D printed products and designs</p>
          <div className="text-2xl font-bold text-secondary">35%</div>
        </Card>
        <Card className="surface-card p-6 text-center space-y-4 glow-effect">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <TrendingUp className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-semibold">Marketplace Commission</h3>
          <p className="text-muted-foreground">Commission from third-party sellers on our platform</p>
          <div className="text-2xl font-bold text-accent">25%</div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueSlide;