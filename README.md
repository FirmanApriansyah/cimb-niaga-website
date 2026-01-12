# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- {/* Card Mobile to Tablet */}
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:hidden lg:px-6">
        {/* Card Savings */}
        <FeatureCard
          title="Savings"
          icon={<PiPiggyBankFill size={35} className="text-white" />}
          modalTitle="Savings"
          modalContent={
            <>
            <p className="text-slate-700">Save securely with our premium savings account, offering competitive interest rates and the flexibility to access your funds whenever you need them. Build your financial future with confidence.</p>
            <div className="bg-slate-50 p-4 rounded-sm mt-3">
              <h2 className="text-xl">Key Benefits</h2>
              <ul className="pt-3 gap-2">
                <li className="flex items-start pt-1 gap-3">
                  <Dot className="text-[#7B011E] scale-[300%]" />
                  <p className="leading-relaxed text-slate-700">Competitive interest rates that help your money grow</p>
                </li>
                <li className="flex items-start pt-2 gap-3">
                  <Dot className="text-[#7B011E] scale-[250%]" />
                  <p className="leading-relaxed text-slate-700">Flexible withdrawals with no hidden penalties</p>
                </li>
                <li className="flex items-start pt-2 gap-3">
                  <Dot className="text-[#7B011E] scale-[250%]" />
                  <p className="leading-relaxed text-slate-700">Secure and reliable banking you can trust</p>
                </li>
              </ul>
            </div>
            </>
          }
        >
          Secure your future with competitive interest rates and flexible
          withdrawal options tailored to your needs.
        </FeatureCard>
        {/* Card Deposits */}
        <FeatureCard
          title="Deposits"
          icon={<PiTrendUpFill size={35} className="text-white" />}
          modalTitle="Deposits"
        >
          Grow your wealth steadily with our high-yield fixed deposit plans
          offering guaranteed returns.
        </FeatureCard>
        {/* Card Loans */}
        <FeatureCard
          title="Loans"
          icon={<PiHandCoinsFill size={35} className="text-white" />}
        >
          Realize your dreams with fast approval personal, home, and auto loans
          with friendly terms
        </FeatureCard>
        {/* Card Digital Payments */}
        <FeatureCard
          title="Digital Payments"
          icon={<PiQrCodeFill size={35} className="text-white" />}
        >
          Experience seamless transactions with QRIS and instant transfers
          anytime, anywhere.
        </FeatureCard>
      </div> -->