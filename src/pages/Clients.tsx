import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Settings, FileText, Clock, BarChart3, Wrench, MapPin, Menu, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample client data based on the image
  const clientsData = [
    { code: "TSI01", firstName: "AA", lastName: "Joanne", suburb: "Testing", postcode: "5072", phone: "0411 222 333", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "01/08/2024" },
    { code: "DFN01", firstName: "Abc", lastName: "def", suburb: "Bella Vista", postcode: "2153", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "XYZAQ1", firstName: "abc", lastName: "xyz", suburb: "Brisbane", postcode: "4000", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "LA08", firstName: "Adam", lastName: "L", suburb: "", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "ANA01", firstName: "Adel", lastName: "Anastasi", suburb: "Gladstone Park", postcode: "3043", phone: "0411235550", billingName: "", payerName: "", referralSource: "", serviceStatus: "Discharged", serviceStartDate: "" },
    { code: "MONA01", firstName: "Adrian", lastName: "Monk", suburb: "Torrensville", postcode: "5031", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "01/02/2025" },
    { code: "MONA02", firstName: "Adrian", lastName: "Monk", suburb: "Compton", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "UNA01", firstName: "Adrina", lastName: "Linke", suburb: "", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "BFFA01", firstName: "aff", lastName: "bfff", suburb: "", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "STSA01", firstName: "alastair", lastName: "stevenson", suburb: "Bowral", postcode: "2576", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "SMJA02", firstName: "Alex", lastName: "Smith", suburb: "", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "VESAG1", firstName: "Althea", lastName: "Vestrit", suburb: "", postcode: "", phone: "0414682161", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "SMJA01", firstName: "Amy", lastName: "Smith", suburb: "Vermont South", postcode: "3133", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "19/08/2024" },
    { code: "MA04", firstName: "Andrew", lastName: "m", suburb: "Parkdale", postcode: "3195", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "RBA01", firstName: "Andrew", lastName: "Thomas", suburb: "Wangara", postcode: "6065", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" },
    { code: "MORA01", firstName: "Angry", lastName: "Mob", suburb: "", postcode: "", phone: "", billingName: "", payerName: "", referralSource: "", serviceStatus: "Current", serviceStartDate: "" }
  ];

  const filteredClients = clientsData.filter(client => 
    client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-slate-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold">VC Test</h1>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/clients">
                <Button variant="ghost" className="text-white hover:bg-slate-700 bg-slate-700" size="sm">
                  <Users className="h-4 w-4 mr-1" />
                  Clients
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" className="text-white hover:bg-slate-700" size="sm">
                  <Users className="h-4 w-4 mr-1" />
                  Workers
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-slate-700" 
                size="sm"
                onClick={() => {
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
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Scrolling Mode:</span>
              <Select defaultValue="scrolling">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scrolling">Scrolling</SelectItem>
                  <SelectItem value="paging">Paging</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">DEFAULT</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Reset Filter</Button>
            <Button variant="outline" size="sm">⚙</Button>
            <Button variant="outline" size="sm">📋</Button>
          </div>
        </div>

        {/* Client Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100">
                    <TableHead className="w-20">
                      <div className="flex items-center">
                        Code
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        First Name
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Last Name
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Suburb
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Postcode
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>Location Roster</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Phone 1
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Billing Name
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Payer Name
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Referral Source
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Service Status
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Service Start Date
                        <Search className="h-3 w-3 ml-1 text-gray-400" />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-yellow-50" : "bg-white"}>
                      <TableCell className="font-medium text-blue-600 underline cursor-pointer">
                        {client.code}
                      </TableCell>
                      <TableCell>{client.firstName}</TableCell>
                      <TableCell>{client.lastName}</TableCell>
                      <TableCell>{client.suburb}</TableCell>
                      <TableCell>{client.postcode}</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.billingName}</TableCell>
                      <TableCell>{client.payerName}</TableCell>
                      <TableCell>{client.referralSource}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={client.serviceStatus === "Current" ? "default" : "secondary"}
                          className={client.serviceStatus === "Current" ? "bg-green-600" : "bg-red-600"}
                        >
                          {client.serviceStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>{client.serviceStartDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Total: 392</span>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-200 border"></div>
              <span>Service Review Date Expired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;