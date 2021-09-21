import Link from "next/link";
import router from "next/router";

function callHistoryReplaceState() {
  const current = new URL(window.location.toString());
  current.searchParams.set("ding", Math.random());
  router.replace(current.toString());
}

function FrontPage() {
  return (
    <div>
      <p>
        <button type="button" onClick={callHistoryReplaceState}>
          call history.replaceState()
        </button>
      </p>
      <p>
        <Link href="/page2">Go to page2</Link>
      </p>

      <p>
        <a href="https://github.com/esamattis/nextjs-history-replace-bug">
          Source code
        </a>
      </p>
    </div>
  );
}

export default FrontPage;
