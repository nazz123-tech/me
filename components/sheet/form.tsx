
    import { Button } from "@/components/ui/button"
    import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { SheetClose } from "../ui/sheet"

export function FormCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Project description
                </FieldLabel>
                <Textarea
                  id="optional-comments"
                  placeholder="Share your wishes and ideas about the project"
                  className="resize-none h-30"
                />
              </Field>
            </FieldGroup>
          </FieldSet>      
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Field orientation="horizontal">
            <Button type="submit">Send</Button>
            <SheetClose className="outline p-1 rounded-[10]">
              Cancel
            </SheetClose>
            
          </Field>
      </CardFooter>
    </Card>
  )
}
