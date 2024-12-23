import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BookOpen, BarChart } from 'lucide-react';

export const ChapterCard = ({ chapter }) => {
  // const navigate = useNavigate();
  // const { updateChapterProgress } = useChapterActions();

  // useEffect(() => {cd 
  //   updateChapterProgress(chapter.id);
  // }, [chapter.id]);

  return (
    <div
      // onClick={() => navigate(`/chapter/${chapter.id}`)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={chapter.imageUrl}
          alt={chapter.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-2">{chapter.title}</h3>
          <p className="text-white/90 line-clamp-2">{chapter.description}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
              <BookOpen size={16} />
              <span className="text-sm">Quizzes</span>
            </div>
            <p className="text-lg font-semibold text-black">{chapter.quizCount}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
              <BarChart size={16} />
              <span className="text-sm">Average</span>
            </div>
            <p className="text-lg font-semibol text-black">{chapter.progress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};