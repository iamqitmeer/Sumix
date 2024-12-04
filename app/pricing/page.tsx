import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-background">
      <div className="container max-w-5xl px-4 py-12 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing that scales with your business</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Choose the plan that's right for you. Our flexible pricing options allow you to scale as your business
            grows.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground">
            Start Free Trial
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
        <Card className="p-6 border">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/user/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  1 user
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  5 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Basic analytics
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Select Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="p-6 border">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/user/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  5 users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  50 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Custom branding
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Select Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="p-6 border">
            <CardHeader>
              <CardTitle>Business</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/user/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  10 users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  100 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Custom branding
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Dedicated support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Select Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="p-6 border">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/user/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Unlimited storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Custom branding
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-primary" />
                  SLA uptime guarantee
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Compare our pricing plans</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Find the plan that fits your needs and budget.
            </p>
          </div>
          <div className="overflow-x-auto mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Features</TableHead>
                  <TableHead>Starter</TableHead>
                  <TableHead>Pro</TableHead>
                  <TableHead>Business</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Users</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell>5 GB</TableCell>
                  <TableCell>50 GB</TableCell>
                  <TableCell>100 GB</TableCell>
                  <TableCell>Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Analytics</TableCell>
                  <TableCell>Basic</TableCell>
                  <TableCell>Advanced</TableCell>
                  <TableCell>Advanced</TableCell>
                  <TableCell>Advanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Custom Branding</TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dedicated Support</TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SLA Uptime Guarantee</TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4 fill-primary" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
