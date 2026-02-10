import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
    priority?: boolean;
    aspectRatio?: string;
    objectFit?: "cover" | "contain" | "fill";
}

const OptimizedImage = ({
    src,
    alt,
    className,
    loading = "lazy",
    priority = false,
    aspectRatio,
    objectFit = "cover",
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div className={cn("relative overflow-hidden", aspectRatio && `aspect-${aspectRatio}`)}>
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}

            <img
                src={src}
                alt={alt}
                className={cn(
                    "transition-opacity duration-300",
                    objectFit === "cover" && "object-cover",
                    objectFit === "contain" && "object-contain",
                    objectFit === "fill" && "object-fill",
                    isLoaded ? "opacity-100" : "opacity-0",
                    className
                )}
                loading={priority ? "eager" : loading}
                fetchPriority={priority ? "high" : "auto"}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
            />

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground text-sm">Failed to load image</p>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
