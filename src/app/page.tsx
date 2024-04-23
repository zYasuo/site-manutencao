import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPhone, FaUserCircle, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <header className="w-full fixed top-0 z-50 backdrop-blur flex justify-between items-center p-2">
        <Image src="https://www.nrconexoes.com.br/img/LOGO_BRANCO_-_Inteiro.png" width={130} height={50} alt="Logo"  className="ml-6"/>
      </header>
      <main className="h-screen p-24 bg-primary flex items-center justify-center">
        <div className="grid lg:grid-cols-2 lg:gap-x-8  lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-white">
              Nosso site está em manutenção para melhor atendê-los
            </h1>
            <p className="mt-3 text-xl text-zinc-400">
              Porém não se preocupe, logo estaremos de volta!
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <span className="text-xs font-medium uppercase text-white">
                Nossos canais de atendimento
              </span>
            </div>
            <div className="mt-4 sm:mt-4 flex flex-wrap gap-2 justify-start">
            <a
                href="https://nrconexoes.com.br/central_assinante_web/"
                className="text-muted-foreground hover:text-primary"
              >
                <Button variant={"secondary"}>
                  <FaUserCircle className="mr-2 text-white" />
                  Central do Cliente
                </Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=558002001273a"
                className="text-muted-foreground hover:text-primary"
              >
                <Button variant={"outline"}>
                  <FaPhone className="mr-2 text-primary" />
                  0800 200 1273
                </Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=558002001273a"
                className="text-muted-foreground hover:text-primary"
              >
                <Button variant={"outline"}>
                  <FaWhatsapp className="mr-2 text-primary" />
                  Whatsapp
                </Button>
              </a>
            </div>
          </div>
        </div>
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl hidden lg:block"
              src="http://localhost:3000/manutencao.svg"
              alt="Image Description"
            />
          </div>
      </main>
    </div>
  );
}
