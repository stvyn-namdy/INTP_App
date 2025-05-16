import React from 'react';
import { Clock, Baby, Milk, UtensilsCrossed, Calendar, Heart } from 'lucide-react';

const FeedingApp = () => {
  // Static mock data for Alianna's feeding records
  const mockFeedings = [
    {
      id: 1,
      time: '07:30',
      type: 'solid',
      amount: '1 cup',
      notes: 'Breakfast: Avocado, Egg, Milk and Banana smoothie',
      date: 'Today'
    },
    {
      id: 2,
      time: '09:45',
      type: 'bottle',
      amount: '3 oz',
      notes: 'Morning milk feeding',
      date: 'Today'
    },
    {
      id: 3,
      time: '12:00',
      type: 'solid',
      amount: '3/4 cup',
      notes: 'Lunch: Rice, Egg yolk and liver puree',
      date: 'Today'
    },
    {
      id: 4,
      time: '14:30',
      type: 'bottle',
      amount: '4 oz',
      notes: 'Afternoon milk feeding',
      date: 'Today'
    },
    {
      id: 5,
      time: '16:00',
      type: 'bottle',
      amount: '3 oz',
      notes: 'Evening milk feeding',
      date: 'Today'
    },
    {
      id: 6,
      time: '18:30',
      type: 'solid',
      amount: '1/2 cup',
      notes: 'Dinner: Plantain and okro soup',
      date: 'Today'
    },
    {
      id: 7,
      time: '20:00',
      type: 'bottle',
      amount: '4 oz',
      notes: 'Bedtime milk feeding',
      date: 'Today'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'breast':
        return <Baby className="w-6 h-6 text-pink-500" />;
      case 'bottle':
        return <Milk className="w-6 h-6 text-blue-500" />;
      case 'solid':
        return <UtensilsCrossed className="w-6 h-6 text-green-500" />;
      default:
        return <Heart className="w-6 h-6 text-gray-400" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'breast':
        return 'Breastfeeding';
      case 'bottle':
        return 'Bottle Feeding';
      case 'solid':
        return 'Solid Food';
      default:
        return 'Feeding';
    }
  };

  const getTypeBgColor = (type) => {
    switch (type) {
      case 'breast':
        return 'bg-pink-50 border-pink-200';
      case 'bottle':
        return 'bg-blue-50 border-blue-200';
      case 'solid':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <Baby className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Alianna's Feeding Routine
          </h1>
          <p className="text-gray-600">
            Track Alianna's daily nutrition schedule
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Feedings Today</p>
                <p className="text-2xl font-bold text-gray-800">7</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Last Feeding</p>
                <p className="text-2xl font-bold text-gray-800">8:00 PM</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Time</p>
                <p className="text-2xl font-bold text-gray-800">2h 30m</p>
              </div>
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">
              Alianna's Feeding Log Today
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {mockFeedings.map((feeding) => (
              <div
                key={feeding.id}
                className={`p-6 ${getTypeBgColor(feeding.type)} transition-colors hover:opacity-80`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {getTypeIcon(feeding.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-800">
                          {feeding.time}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          {getTypeLabel(feeding.type)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Amount: {feeding.amount}
                      </div>
                      {feeding.notes && (
                        <div className="text-sm text-gray-500 mt-1">
                          {feeding.notes}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">{feeding.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
            <UtensilsCrossed className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Main Meals</p>
            <p className="text-lg font-semibold text-gray-800">3 meals</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
            <Milk className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Milk Feedings</p>
            <p className="text-lg font-semibold text-gray-800">4 sessions</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Total Nutrition</p>
            <p className="text-lg font-semibold text-gray-800">Balanced</p>
          </div>
        </div>

        <footer className="text-center mt-8 py-6">
          <p className="text-gray-500 text-sm">
            Made with 💝 for Alianna's healthy nutrition
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FeedingApp;