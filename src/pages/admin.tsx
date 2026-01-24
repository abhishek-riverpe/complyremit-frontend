import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Building, TrendingUp } from "lucide-react";
import { Link } from "wouter";

interface WaitlistEntry {
  id: number;
  email: string;
  companyName: string | null;
  transferVolume: string | null;
  createdAt: string;
}

export default function Admin() {
  const { data: entries, isLoading, error } = useQuery<WaitlistEntry[]>({
    queryKey: ["/api/waitlist"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-gray">Loading waitlist entries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading waitlist entries</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-display-md text-gray-900 mb-2">Waitlist Admin</h1>
              <p className="text-body-md text-neutral-gray">
                View and manage ComplyRemit waitlist signups
              </p>
            </div>
            <Badge variant="secondary" className="text-label-lg">
              {entries?.length || 0} Total Signups
            </Badge>
          </div>
        </div>

        {!entries || entries.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Mail className="h-12 w-12 text-neutral-gray mx-auto mb-4" />
              <h3 className="text-heading-md text-gray-900 mb-2">No signups yet</h3>
              <p className="text-body-md text-neutral-gray mb-6">
                Waitlist entries will appear here when users sign up
              </p>
              <Button asChild>
                <Link href="/">Go to Landing Page</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {entries.map((entry) => (
              <Card key={entry.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-heading-md">{entry.email}</CardTitle>
                        <p className="text-body-sm text-neutral-gray">
                          Signed up on {formatDate(entry.createdAt)}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">#{entry.id}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {entry.companyName && (
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-neutral-gray" />
                        <span className="text-body-sm">
                          <span className="font-medium">Company:</span> {entry.companyName}
                        </span>
                      </div>
                    )}
                    {entry.transferVolume && (
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-neutral-gray" />
                        <span className="text-body-sm">
                          <span className="font-medium">Volume:</span> {entry.transferVolume}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}