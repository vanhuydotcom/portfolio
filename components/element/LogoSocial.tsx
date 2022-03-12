
interface IProps {
    url: string,
    alt: string,
}

export default function LogoSocial({ url, alt }: IProps) {
    return (
        <div className="img_logo">
            <img src={url} alt={alt} />
        </div>
    )
}