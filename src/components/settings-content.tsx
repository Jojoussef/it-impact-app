"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function SettingsContent() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-3 max-w-md">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your account details here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" defaultValue="123 Main St, Anytown, USA" />
            </div>
          </CardContent>
          <CardFooter>
            <Button style={{ backgroundColor: "#174EAB" }}>Save changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Information</CardTitle>
            <CardDescription>Your current health plan details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Current Plan</p>
                <p className="text-sm text-gray-500">Premium Health Coverage</p>
              </div>
              <div>
                <p className="text-sm font-medium">Member Since</p>
                <p className="text-sm text-gray-500">January 15, 2022</p>
              </div>
              <div>
                <p className="text-sm font-medium">Plan ID</p>
                <p className="text-sm text-gray-500">PREM-12345</p>
              </div>
              <div>
                <p className="text-sm font-medium">Renewal Date</p>
                <p className="text-sm text-gray-500">January 15, 2024</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">View plan details</Button>
            <Button className="ml-2" style={{ backgroundColor: "#04C7FE" }}>
              Upgrade plan
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">All Notifications</Label>
                <p className="text-sm text-muted-foreground">Enable or disable all notifications</p>
              </div>
              <Switch id="notifications" checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-updates">Email Updates</Label>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch
                id="email-updates"
                checked={emailUpdates}
                onCheckedChange={setEmailUpdates}
                disabled={!notificationsEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-alerts">SMS Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive urgent alerts via SMS</p>
              </div>
              <Switch
                id="sms-alerts"
                checked={smsAlerts}
                onCheckedChange={setSmsAlerts}
                disabled={!notificationsEnabled}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button style={{ backgroundColor: "#174EAB" }}>Save preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password to keep your account secure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button style={{ backgroundColor: "#174EAB" }}>Update password</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>Add an extra layer of security to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Protect your account with 2FA</p>
              </div>
              <Switch defaultChecked={false} />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn more</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
