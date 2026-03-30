import { Leaf, Sprout, Flower } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 p-8">
        {/* Animated seedling growing */}
        <div className="relative">
          <div className="flex items-end gap-1">
            {/* Soil */}
            <div className="w-8 h-4 bg-amber-600 rounded-b-full"></div>
            <div className="w-8 h-4 bg-amber-600 rounded-b-full"></div>
            <div className="w-8 h-4 bg-amber-600 rounded-b-full"></div>
          </div>

          {/* Stem growing animation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1 bg-green-500 animate-pulse" style={{ height: '20px' }}></div>
          </div>

          {/* Leaves appearing */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <Leaf className="w-4 h-4 text-green-600 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-4">
            <Leaf className="w-3 h-3 text-green-500 animate-bounce" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Loading text with typing effect */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2 animate-pulse">
            🌱 Growing Your Experience
          </h2>
          <p className="text-muted-foreground animate-pulse" style={{ animationDelay: '0.5s' }}>
            Please wait as we fetch the freshest data...
          </p>
        </div>

        {/* Interactive dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Fun fact */}
        <div className="text-center max-w-xs">
          <p className="text-sm text-muted-foreground italic animate-pulse" style={{ animationDelay: '1s' }}>
            "Did you know? A single tomato plant can produce up to 10 lbs of fruit!"
          </p>
        </div>
      </div>
    </div>
  )
}