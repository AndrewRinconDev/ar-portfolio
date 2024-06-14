import "./ProfileImageEffect.css";

function ProfileImageEffect({ url, className }: { url: string, className?: string }) {
    return (
        <div className={`${className} profile-image-container md:ml-0`}>
            <div className="container-inner">
                <div className="bg-image" />

                <img
                    className="img img1"
                    src={url}
                />
            </div>
        </div>
    );
}

export default ProfileImageEffect;
