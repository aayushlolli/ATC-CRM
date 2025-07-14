import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Settings, FileText, Clock, BarChart3, Wrench, MapPin, Menu } from "lucide-react";

const Index = () => {
  const [searchClients, setSearchClients] = useState("");
  const [searchWorkers, setSearchWorkers] = useState("");
  const [searchRosters, setSearchRosters] = useState("");

  // Sample data for unallocated shifts
  const unallocatedShifts = [
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000368", client: "Peter Linkie", type: "NDIS" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000329", client: "Dalai Lama", type: "NDIS" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000313", client: "Maria Flores", type: "Private" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000327", client: "Cameron Ricky", type: "" },
    { date: "14-07-2025", startTime: "10:00:00", rosterId: "R0000439", client: "John Smith", type: "NDIS" },
    { date: "14-07-2025", startTime: "15:00:00", rosterId: "R0000605", client: "Donald Trump", type: "NDIS" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000305", client: "willow Adel", type: "" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000568", client: "Client Testing", type: "" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000503", client: "Joseph Williams", type: "" },
    { date: "14-07-2025", startTime: "09:00:00", rosterId: "R0000284", client: "Sam Singh", type: "" }
  ];

  // Sample data for running shifts
  const runningShifts = [
    { startTime: "06:00:00", finishTime: "14:00:00", carer: "Charli Styles", client: "Charli Styles", isLate: "Late" },
    { startTime: "07:00:00", finishTime: "09:00:00", carer: "", client: "Jasmin Adams", isLate: "" },
    { startTime: "07:00:00", finishTime: "10:00:00", carer: "Sarah McPhan", client: "Adrian Monk", isLate: "" },
    { startTime: "09:00:00", finishTime: "13:00:00", carer: "", client: "Cameron Ricky", isLate: "" },
    { startTime: "09:00:00", finishTime: "14:00:00", carer: "", client: "Client Testing", isLate: "" },
    { startTime: "09:00:00", finishTime: "09:00:00", carer: "", client: "Maria Flores", isLate: "" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-slate-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold">VC Test</h1>
            <nav className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <Users className="h-4 w-4 mr-1" />
                Clients
              </Button>
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <Users className="h-4 w-4 mr-1" />
                Workers
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-slate-700" 
                size="sm"
                onClick={() => {
                  // AI functionality can be added here
                  console.log("AI button clicked");
                }}
              >
                <FileText className="h-4 w-4 mr-1" />
                AI
              </Button>
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <BarChart3 className="h-4 w-4 mr-1" />
                Reporting
              </Button>
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <Clock className="h-4 w-4 mr-1" />
                Timesheets
              </Button>
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <Settings className="h-4 w-4 mr-1" />
                Operations
              </Button>
              <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                <Wrench className="h-4 w-4 mr-1" />
                Maintenance
              </Button>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                Rapid Rostering
              </Badge>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-4 w-4" />
            </Button>
            <div className="text-sm">Training: 1 Trainer: 1</div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-6">
          <Card className="bg-pink-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Incidents</div>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card className="bg-pink-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Conflicts</div>
              <div className="text-3xl font-bold">10</div>
            </CardContent>
          </Card>
          <Card className="bg-pink-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Unallocated</div>
              <div className="text-3xl font-bold">253</div>
            </CardContent>
          </Card>
          <Card className="bg-pink-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Late</div>
              <div className="text-3xl font-bold">10</div>
            </CardContent>
          </Card>
          <Card className="bg-cyan-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Worker Compliance</div>
              <div className="text-3xl font-bold">7</div>
            </CardContent>
          </Card>
          <Card className="bg-cyan-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Client Compliance</div>
              <div className="text-3xl font-bold">32</div>
            </CardContent>
          </Card>
          <Card className="bg-cyan-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Client Requests</div>
              <div className="text-3xl font-bold">14</div>
            </CardContent>
          </Card>
          <Card className="bg-cyan-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Leave Requests</div>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">App Notes</div>
              <div className="text-3xl font-bold">10</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-400 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-sm mb-1">Tasks</div>
              <div className="text-3xl font-bold">50</div>
            </CardContent>
          </Card>
        </div>

        {/* Search Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Search Clients" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Search Workers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Workers</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Search Rosters (by Client or Location name)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rosters</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <MapPin className="h-4 w-4 mr-2" />
            Today's Worker Locations
          </Button>
        </div>

        {/* Main Content - Two Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Unallocated Shifts */}
          <Card>
            <CardHeader className="bg-slate-700 text-white">
              <CardTitle className="text-lg">Unallocated Shifts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date Of Service</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>Roster Id</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {unallocatedShifts.map((shift, index) => (
                    <TableRow key={index}>
                      <TableCell>{shift.date}</TableCell>
                      <TableCell>{shift.startTime}</TableCell>
                      <TableCell>{shift.rosterId}</TableCell>
                      <TableCell className="text-blue-600 underline cursor-pointer">
                        {shift.client}
                      </TableCell>
                      <TableCell>
                        {shift.type && (
                          <Badge variant={shift.type === "NDIS" ? "default" : "secondary"}>
                            {shift.type}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Running Shifts */}
          <Card>
            <CardHeader className="bg-slate-700 text-white">
              <CardTitle className="text-lg">Running Shifts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Start Time</TableHead>
                    <TableHead>Finish Time</TableHead>
                    <TableHead>Carer</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Is late</TableHead>
                    <TableHead>APP Start Time</TableHead>
                    <TableHead>APP Finish Time</TableHead>
                    <TableHead>Issue note</TableHead>
                    <TableHead>View Roster</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {runningShifts.map((shift, index) => (
                    <TableRow key={index}>
                      <TableCell>{shift.startTime}</TableCell>
                      <TableCell>{shift.finishTime}</TableCell>
                      <TableCell>{shift.carer}</TableCell>
                      <TableCell className="text-blue-600 underline cursor-pointer">
                        {shift.client}
                      </TableCell>
                      <TableCell>
                        {shift.isLate && (
                          <Badge variant="destructive">{shift.isLate}</Badge>
                        )}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Roster
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
