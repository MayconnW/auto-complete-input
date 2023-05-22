This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Node version: 18.12.1

Install de deps:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live on Vercel

This project was deployed on Vercel, you can access it [here](https://auto-complete-input.vercel.app/)

## Gif demo

## Considerations
 - The component is on "app/components/auto-complete" path
 - All that it needs to run is there
 - It could be extracted to a simple component project and installed in this current project, due to the time proposed I didn't do that
 - In a real world project I don't think I would use pure sass. There are really good libraries for that as styled components and chakra-ui
 - I'm using nextJs because it is really simple to deploy on vercel, but in this simple project there is no reason to use it
 - The component could be improved, changing the "string" type for fetch and callback to an infer type T
 - It would be really easy to change the fake fetch for an api call, as the component is accepting a callback for load the data

## Thank You
It was fun to develop this, I hope you enjoy. If you have any suggestion, please let me know.
