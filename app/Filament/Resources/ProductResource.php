<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;

use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Filament\Forms\Components\Select;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-cart';
    protected static ?string $activeNavigationIcon = 'heroicon-s-shopping-cart';
    protected static ?string $navigationGroup = 'Data';
    protected static ?string $navigationBadgeTooltip = 'Total product';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required()->maxLength(255)->label('Name'),
                TextInput::make('stock')->required()->maxLength(255)->label('Stock')->numeric(),
                TextInput::make('price')->required()->label('Price')->numeric()->prefix('Rp'),
                FileUpload::make('image')->disk('public')->directory('product')->visibility('public')->getUploadedFileNameForStorageUsing(
                    fn (TemporaryUploadedFile $file, callable $get) => 
                    (str_replace(' ', '', $get('name') ?? 'default_name')) . '.' . $file->getClientOriginalExtension()
                ),
                Select::make('type')->options([
                    'food' => 'Food',
                    'drink' => 'Drink',
                ])->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID')->sortable(),
                Tables\Columns\TextColumn::make('name')->label('Product')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('stock')->label('Stock')->searchable(),
                Tables\Columns\BadgeColumn::make('type')->label('Type')->searchable()->colors([
                    'primary' => 'Food',
                    'danger' => 'Drink',
                ]),
                Tables\Columns\ImageColumn::make('image')->label('Image')->square(),
                Tables\Columns\TextColumn::make('price')->label('Price')->searchable()->prefix('Rp.')->formatStateUsing(
                    fn (string $state) : string =>
                    number_format($state, 2, ',', '.')
                ),
            ])
            ->filters([
                SelectFilter::make('type')->options([
                    'food' => 'Food',
                    'drink' => 'Drink',
                ]),
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\ViewAction::make(),
                ]),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
