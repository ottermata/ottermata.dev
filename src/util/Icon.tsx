
export type IconProps = {
    name: string;
    alt?: string;
}
export function Icon({name, alt}: IconProps) {
    return (
        <img
            height="32"
            width="32"
            src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name.toLowerCase()}.svg`}
            alt={alt || name}
        />
    );
}

export function GitHubIcon() {
    return (
        <Icon name="GitHub"/>
    );
}

export function LinkedInIcon() {
    return (
        <Icon name="LinkedIn"/>
    );
}