export function VideoUploadGuide() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Video Storage Instructions</h3>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        To add videos, create a folder named{" "}
        <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">videos</code> in the{" "}
        <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">public</code> directory and add all 71
        episodes with this naming format:
      </p>
      <div className="bg-slate-900 text-slate-100 p-4 rounded font-mono text-sm overflow-x-auto">
        Courage- Chú Chó Nhút Nhát (Thuyết Minh)(1).mp4
        <br />
        Courage- Chú Chó Nhút Nhát (Thuyết Minh)(2).mp4
        <br />
        ... (episodes 3-70) ...
        <br />
        Courage- Chú Chó Nhút Nhát (Thuyết Minh)(71).mp4
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
        The website will automatically detect and play videos from the /public/videos/ folder.
      </p>
    </div>
  )
}
