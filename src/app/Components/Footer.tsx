export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </>
  );
}
