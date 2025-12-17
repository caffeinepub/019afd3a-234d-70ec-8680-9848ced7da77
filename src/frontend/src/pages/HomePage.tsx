import { Heart } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex-1 flex flex-col">
            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="text-center space-y-8 animate-fade-in">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary">
                        Monday Maverick
                    </h1>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    © 2025. Built with{' '}
                    <Heart className="inline-block w-4 h-4 text-primary fill-primary" />{' '}
                    using{' '}
                    <a
                        href="https://caffeine.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium transition-colors"
                    >
                        caffeine.ai
                    </a>
                </p>
            </footer>
        </div>
    );
}
