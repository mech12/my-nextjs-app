"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { AboutDialog } from "@/components/about-dialog"

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">환영합니다!</CardTitle>
            <CardDescription>
              Next.js + Tailwind + shadcn/ui 데모
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
            <Button className="w-full" size="lg">
              시작하기
            </Button>
            <div className="flex justify-center gap-2 pt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setAboutOpen(true)}
              >
                <Info className="h-4 w-4 mr-2" />
                About
              </Button>
              <Link href="/settings">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  설정
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
    </main>
  )
}