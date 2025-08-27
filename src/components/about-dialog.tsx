import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Users, Code, Heart } from "lucide-react"

interface AboutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <Info className="h-6 w-6" />
            About
          </DialogTitle>
          <DialogDescription>
            이 프로젝트에 대한 자세한 정보를 확인하세요.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                기술 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Frontend</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Next.js 14 (App Router)</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• shadcn/ui</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">개발 도구</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ESLint</li>
                    <li>• Prettier</li>
                    <li>• Lucide React Icons</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                프로젝트 정보
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">프로젝트 목적</h4>
                  <p className="text-sm text-muted-foreground">
                    Next.js와 shadcn/ui를 활용한 모던 웹 애플리케이션 개발을 위한 
                    템플릿 프로젝트입니다. 최신 웹 개발 트렌드와 모범 사례를 반영하여 
                    빠르고 효율적인 개발을 지원합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">주요 기능</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 반응형 디자인</li>
                    <li>• 접근성 고려</li>
                    <li>• TypeScript 타입 안전성</li>
                    <li>• 컴포넌트 기반 아키텍처</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                개발 철학
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자 경험을 최우선으로 생각하며, 깔끔하고 직관적인 인터페이스를 
                제공하는 것을 목표로 합니다. 코드의 가독성과 유지보수성을 고려하여 
                지속 가능한 개발을 지향합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
