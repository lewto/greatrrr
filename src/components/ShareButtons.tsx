import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';
import { MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const handleDiscordShare = () => {
    const discordUrl = `https://discord.com/channels/@me?text=${encodeURIComponent(`${title} ${url}`)}`;
    window.open(discordUrl, '_blank');
  };

  return (
    <div className="flex space-x-4">
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>

      <button
        onClick={handleDiscordShare}
        className="bg-[#5865F2] p-1.5 rounded-full hover:bg-[#4752C4] transition-colors"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default ShareButtons;