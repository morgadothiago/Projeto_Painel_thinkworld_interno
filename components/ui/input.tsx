import * as React from "react"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, name, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false)
        const [inputType, setInputType] = React.useState(type)

        React.useEffect(() => {
            if (type === "password" && showPassword) {
                setInputType("text")
            } else {
                setInputType(type)
            }
        }, [type, showPassword])

        const getIcon = () => {
            if (name === "email") return <Mail className="h-4 w-4" />
            if (name === "password") return <Lock className="h-4 w-4" />
            if (name === "user" || name === "username") return <User className="h-4 w-4" />
            return null
        }

        const icon = getIcon()

        return (
            <div className="relative w-full">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {icon}
                    </div>
                )}
                <input
                    type={inputType}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        icon && "pl-10",
                        type === "password" && "pr-10",
                        className
                    )}
                    ref={ref}
                    name={name}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
