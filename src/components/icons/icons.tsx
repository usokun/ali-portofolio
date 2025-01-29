import Image from "next/image";

export default function Icons() {
  return <div>This is icon tsx</div>;
}

function WhatsappIcon() {
  return (
    <Image src="/icons/whatsapp.png" width={32} height={32} alt="wa icon" />
  );
}

export { WhatsappIcon };
