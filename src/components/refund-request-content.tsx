"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Filter, MoreHorizontal, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RefundRequestContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const refundRequests = [
    {
      id: "REF-1234",
      patient: "Sarah Johnson",
      amount: "$245.00",
      date: "2023-05-15",
      status: "pending",
      reason: "Service not received",
    },
    {
      id: "REF-1235",
      patient: "Michael Brown",
      amount: "$120.50",
      date: "2023-05-14",
      status: "approved",
      reason: "Overpayment",
    },
    {
      id: "REF-1236",
      patient: "Emily Davis",
      amount: "$350.75",
      date: "2023-05-12",
      status: "rejected",
      reason: "Duplicate payment",
    },
    {
      id: "REF-1237",
      patient: "Robert Wilson",
      amount: "$89.99",
      date: "2023-05-10",
      status: "pending",
      reason: "Incorrect charge",
    },
    {
      id: "REF-1238",
      patient: "Jennifer Taylor",
      amount: "$175.25",
      date: "2023-05-08",
      status: "approved",
      reason: "Service not received",
    },
    {
      id: "REF-1239",
      patient: "David Martinez",
      amount: "$430.00",
      date: "2023-05-05",
      status: "pending",
      reason: "Overpayment",
    },
    {
      id: "REF-1240",
      patient: "Lisa Anderson",
      amount: "$65.50",
      date: "2023-05-03",
      status: "rejected",
      reason: "Ineligible service",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "pending":
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search refund requests..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="p-0 font-medium">
                  ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-medium">
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-medium">
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {refundRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.patient}</TableCell>
                <TableCell>{request.reason}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{request.amount}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(request.status)}`} variant="outline">
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Approve request</DropdownMenuItem>
                      <DropdownMenuItem>Reject request</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Contact patient</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
