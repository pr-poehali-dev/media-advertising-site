import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                MEDIA HUB
              </h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-blue-600"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-blue-600"
              >
                Продукты
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-blue-600"
              >
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Революционный медиа-продукт
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя новые возможности создания, обработки и
              распространения медиа-контента
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3"
              >
                <Icon name="Info" className="mr-2" size={20} />
                Подробнее
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать
              </Button>
            </div>

            <div className="relative">
              <img
                src="/img/57d42eaa-4658-4597-b450-b91cdcfe435d.jpg"
                alt="Media Hub Product"
                className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Подробнее о возможностях
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-xl text-blue-600">
                  Быстрая обработка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Обрабатывайте медиа-файлы в 10 раз быстрее благодаря нашей
                  оптимизированной технологии
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="text-orange-600" size={24} />
                </div>
                <CardTitle className="text-xl text-orange-600">
                  Креативные инструменты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Широкий набор профессиональных инструментов для создания
                  уникального контента
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Share2" className="text-purple-600" size={24} />
                </div>
                <CardTitle className="text-xl text-purple-600">
                  Легкий экспорт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Мгновенно экспортируйте результаты в любые популярные форматы
                  и платформы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">
            Скачать Media Hub
          </h3>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Выберите подходящую версию для вашей операционной системы
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Monitor"
                  className="text-white mx-auto mb-4"
                  size={32}
                />
                <CardTitle className="text-white">Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">Версия 2.1.0</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать (64-bit)
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Laptop"
                  className="text-white mx-auto mb-4"
                  size={32}
                />
                <CardTitle className="text-white">macOS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">Версия 2.1.0</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать (Intel/M1)
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Terminal"
                  className="text-white mx-auto mb-4"
                  size={32}
                />
                <CardTitle className="text-white">Linux</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">Версия 2.1.0</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать (.deb)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
            <span className="text-xl font-bold">MEDIA HUB</span>
          </div>
          <p className="text-gray-400 mb-4">
            Создано для профессионалов и энтузиастов медиа-индустрии
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
