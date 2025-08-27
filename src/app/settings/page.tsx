"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Settings, Zap, Shield, Bell, Palette } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [yoloMode, setYoloMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Settings className="h-8 w-8 mr-2" />
              <CardTitle className="text-3xl font-bold">설정</CardTitle>
            </div>
            <CardDescription>
              앱 설정을 관리하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* YOLO Mode 설정 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <Label htmlFor="yolo-mode" className="text-lg font-semibold">
                  YOLO Mode
                </Label>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="space-y-1">
                  <p className="font-medium">YOLO Mode 활성화</p>
                  <p className="text-sm text-gray-600">
                    모든 안전장치를 해제하고 무모한 모드로 전환합니다. 주의: 위험할 수 있습니다!
                  </p>
                </div>
                <Switch
                  id="yolo-mode"
                  checked={yoloMode}
                  onCheckedChange={setYoloMode}
                />
              </div>
              {yoloMode && (
                <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-sm text-red-700 font-medium">
                    ⚠️ YOLO Mode가 활성화되었습니다! 모든 안전장치가 해제되었습니다.
                  </p>
                </div>
              )}
            </div>

            <Separator />

            {/* 알림 설정 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-blue-500" />
                <Label htmlFor="notifications" className="text-lg font-semibold">
                  알림
                </Label>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="space-y-1">
                  <p className="font-medium">푸시 알림</p>
                  <p className="text-sm text-gray-600">
                    중요한 업데이트와 알림을 받습니다
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
            </div>

            <Separator />

            {/* 다크 모드 설정 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-purple-500" />
                <Label htmlFor="dark-mode" className="text-lg font-semibold">
                  테마
                </Label>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="space-y-1">
                  <p className="font-medium">다크 모드</p>
                  <p className="text-sm text-gray-600">
                    어두운 테마로 전환합니다
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </div>

            <Separator />

            {/* 홈으로 돌아가기 버튼 */}
            <div className="flex justify-center pt-4">
              <Link href="/">
                <Button variant="outline" size="lg">
                  홈으로 돌아가기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


